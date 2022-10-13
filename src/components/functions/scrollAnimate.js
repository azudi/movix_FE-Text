import React from 'react'

export function scrollAnimate(parentElem, childrenElem) {
    let parent = document.querySelector(parentElem)
    let children = document.querySelectorAll(childrenElem)
    
    parent.onscroll = function(){
        // console.log(parent.getBoundingClientRect().bottom)

      Array.from(children).forEach(element => {
        if( element.getBoundingClientRect().bottom > (parent.getBoundingClientRect().bottom - 40 ) ){
            element.classList.add("cut-nav")
        }
        else{
            element.classList.remove("cut-nav")
        }
      });
    }
}