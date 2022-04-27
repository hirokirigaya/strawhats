import React, { useEffect } from 'react';
import './Explore.css'


function Explore() {


  useEffect(() => {
    const bubbleLower = document.getElementById("bubble1")
    const bubbleUpper = document.getElementById("bubble2")

    window.addEventListener('scroll', () => {
      let val = window.scrollY;
      bubbleLower.style.top = val * 0.25 + 'px';
      bubbleUpper.style.top = val * 0.25 + 'px';
      bubbleLower.style.right = val * 0.05 + 'px';
      bubbleUpper.style.left = val * 0.05 + 'px';
    })
  }, [])
  return (
    <div className='sec' id='explore'>
      <h2>StrawHat's</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?<br></br>
        <br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in at
        aut optio laborum nisi molestiae amet, nulla pariatur distinctio, porro
        sunt beatae officia dolore eos, perferendis temporibus odio quas?
      </p>
      <img src="/../img/particles.png" alt="bubble" id='bubble1'/>
      <img src="/../img/particles.png" alt="bubble" id='bubble2'/>
    </div>
  );
}

export default Explore;
