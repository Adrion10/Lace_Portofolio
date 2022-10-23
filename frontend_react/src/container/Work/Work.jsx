
import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../Wrapper';
import { urlFor, client } from '../../client';

import './Work.scss'

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  
useEffect(() => {
  const query = '*[_type == "works]';
  client.fetch(query).then((data) => {
    setWorks(data)
    setFilterWork(data)
  })
}, [])


  
  return (
    <>
     <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

<div className="app__work-filter">
  {['UI/UX', 'Web App', 'React JS', 'MERN', 'All'].map((item, index) => (
    <div
      key={index}
      onClick={() => handleWorkFilter(item)}
      className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
    >
      {item}
    </div>
  ))}
</div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-protfolio"
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex'
            key={index}>
            <div className='app__work-img app_flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />

            </div>
       </div>
        ))}
      </motion.div>
      
    </>
  )
}

export default Work