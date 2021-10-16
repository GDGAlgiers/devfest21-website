
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import {IoMdArrowDropupCircle} from 'react-icons/io'

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)


const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 200){
	setVisible(true)
	}
	else if (scrolled <= 200){
	setVisible(false)
    }

};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'

	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <button onClick={scrollToTop} style={{display: visible  ? 'inline' : 'none'}}><IoMdArrowDropupCircle className="sm:hidden text-6xl text-black fixed bottom-4 right-4 z-50"/></button>

);
}

export default ScrollButton;
