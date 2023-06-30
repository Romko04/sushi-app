import { useEffect, useRef, useState } from 'react';
import styles from './sort.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchProducts, setIndexSort, sortListType } from '../../redux/slices/ProductsSlice';
import { useNavigate } from 'react-router';
interface SortType {
  breakpoint: string | undefined
  sortValues: sortListType
  activeSortIndex: number
}
const Sort: React.FC<SortType> = ({sortValues,activeSortIndex,breakpoint}) => {
  const {languages,language} = useSelector((state:RootState)=>state.languages)
  const [isActive, setActive] = useState<boolean>(false)
  const dispatch:AppDispatch = useDispatch()
  const navigate = useNavigate();
  const keys = Object.keys(sortValues)
  const menuRef = useRef<HTMLDivElement| null>(null)
  const handleToggle = () => {
    setActive(!isActive)
  }
  const handleClick = (index: number, value:string) => {
    setActive(!isActive)
    dispatch(setIndexSort(index))
    if (breakpoint) dispatch(fetchProducts({product:breakpoint,sort: value})) 
  }
  const handleClickOutside = (e: MouseEvent) => {
    if (!menuRef?.current?.contains(e.target as Node)) {
      setActive(false);
    }
  }
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('sort', keys[activeSortIndex]);
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [keys[activeSortIndex]]);
  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    };
  }, []);
  return (
    <div ref={menuRef} className={styles.sort}>
      <span onClick={handleToggle} className={`${styles.sortValue} ${isActive && styles.sortValueActive}`}>
        {languages[language]['sort']}
      </span>
      <ul className={`${styles.sortList} ${isActive && styles.listActive}`}>
        {keys.map((i, index) => <li onClick={() => handleClick(index, i)} key={index} className={`${styles.item} ${index === activeSortIndex && styles.itemActive}`}>{languages[language][sortValues[i]]}</li>)}
      </ul>
    </div>
  )
}
export default Sort