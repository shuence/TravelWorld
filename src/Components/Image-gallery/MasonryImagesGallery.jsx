import React from 'react'
import Masonry,{ ResponsiveMasonry} from "react-responsive-masonry"
import galleryImages from './galleryImage'


const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
      <Masonry gutter="1rem">
        {
          galleryImages.map((items, index) => (
            <img 
              key={index}
              src={items}
              className='masonry__img'
              alt="gallery"
              style={{width:"100%", display:"block", borderRadius:"10px"}}
            />
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery