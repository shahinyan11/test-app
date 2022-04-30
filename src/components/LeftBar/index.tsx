import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesAction, setCurrentPage } from "../../redux/actions/catActions";
import { RootState } from "../../redux/reducers";
import './style.css'


function LeftBar() {
    const dispatch = useDispatch()
    const {categories, page} = useSelector((state: RootState) => state.mainReducer )
    const [selectedCat, setSelectedCat] = useState<any>(null);

    const loadMore =()=>{
        dispatch(getImagesAction({
            page: page + 1,
            category_ids: selectedCat
        }))
    }

    const handleClick = (id: number)=>{
        dispatch(setCurrentPage(1))

        setSelectedCat(id !== selectedCat ? id : null)
      
        dispatch(getImagesAction({
            category_ids: id,
            remove: true
        }))
    }

    return (
        <div className="LeftBar">
            <ul>
                {
                    categories.map((category: any)=>(
                        <li 
                            key={category.id}
                            onClick={()=>handleClick(category.id)}
                            className={selectedCat === category.id ? 'selected' : ''}
                        >
                            {category.name}
                        </li>
                    ))
                }
            </ul>
            <button onClick={loadMore}>load More</button>
        </div>
    );
}

export default LeftBar;
