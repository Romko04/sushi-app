import { useEffect, useRef, useState } from 'react';
import styles from './sort.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchProducts, setIndexSort, sortListType } from '../../redux/slices/ProductsSlice';
interface SortType {
  breakpoint: string | undefined
  sortItems: sortListType
  activeSortIndex: number
}
const Sort: React.FC<SortType> = ({sortItems,activeSortIndex,breakpoint}) => {
  const [isActive, setActive] = useState<boolean>(false)
  const dispatch:AppDispatch = useDispatch()
  const keys = Object.keys(sortItems)
  const menuRef = useRef<HTMLDivElement| null>(null)
  const handleToggle = () => {
    setActive(!isActive)
  }
  const handleClick = (index: number, value:string) => {
    setActive(!isActive)
    dispatch(setIndexSort(index))
    dispatch(fetchProducts({product:'sets',sort: value}))
  }
  const handleClickOutside = (e: MouseEvent) => {
    if (!menuRef?.current?.contains(e.target as Node)) {
      setActive(false);
    }
  }
  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    };
  }, []);
  return (
    <div ref={menuRef} className={styles.sort}>
      <span onClick={handleToggle} className={`${styles.sortValue} ${isActive && styles.sortValueActive}`}>
        Сортировка за
      </span>
      <ul className={`${styles.sortList} ${isActive && styles.listActive}`}>
        {keys.map((i, index) => <li onClick={() => handleClick(index, i)} key={index} className={`${styles.item} ${index === activeSortIndex && styles.itemActive}`}>{sortItems[i]}</li>)}
      </ul>
    </div>
  )
}
export default Sort