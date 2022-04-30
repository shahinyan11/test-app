import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAction, getImagesAction } from '../../redux/actions/catActions';
import LeftBar from '../../components/LeftBar';
import "./style.css"
import { RootState } from '../../redux/reducers';


function Home() {
  const dispatch = useDispatch()
  const {images} = useSelector((state: RootState) => state.mainReducer )

  useEffect(()=>{
    dispatch(getCategoriesAction())
    dispatch(getImagesAction())
  }, [])

// console.log(images)

  return (
    <div className="Home">
      <LeftBar/>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {
          images.map((value: any)=>(
            <div key={value.id} className='imageContainer'>
              <img src={value.url} alt="" />
            </div>
          ))
          
        }
      
      </div>
    </div>
  );
}

  export default Home