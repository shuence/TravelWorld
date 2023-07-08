import React,{useRef} from 'react'
import "./searchbar.css"
import { Col, Form, FormGroup } from "reactstrap"

const SearchBar = () => {

    const locationRef = useRef("")
    const distanceRef = useRef(0)
    const dateRef = useRef("")
    const maxGroupSizeRef = useRef("0")

    const searchHandler = (e) => {

        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const date = dateRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location === "" || distance==="" || date==="" || maxGroupSize==="" ){
            alert("Please fill all the fields")
            return
        }
    }


  return (
    
    <Col lg="12">
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-line"/></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-time-line"/></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-calendar-line"/></span>
                    <div>
                        <h6>Date</h6>
                        <input type="date" placeholder="Date" ref={dateRef}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-group-line"/></span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                    </div>
                </FormGroup>

                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i class="ri-search-line" />
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar