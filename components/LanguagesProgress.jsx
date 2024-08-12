'use client';
import React from 'react'
import {motion} from 'framer-motion'

export default function LanguagesProgress() {

  // const languages = [
  //   {
  //     language: 'MongoDB',
  //     proficiency:70,
  //     bgColor:'#61dafB',
  //   },
  //   {
  //     language: 'Express',
  //     proficiency:65,
  //     bgColor:'#68a063',
  //   },
  //   {
  //     language: 'React',
  //     proficiency:75,
  //     bgColor:'#edf3d8',
  //   },
  //   {
  //     language: 'Node.js',
  //     proficiency:85,
  //     bgColor:'#61daf8',
  //   },
  //   {
  //     language: 'Next.js',
  //     proficiency:70,
  //     bgColor:'#ffabe7',
  //   },
  //   {
  //     language: 'Javascript',
  //     proficiency:80,
  //     bgColor:'#2965f1',
  //   },
  // ]
  const languages = [
    {
      language: 'Html',
      proficiency:70,
      bgColor:'#61dafB',
    },
    {
      language: 'CSS',
      proficiency:65,
      bgColor:'#68a063',
    },
    {
      language: 'MS office',
      proficiency:75,
      bgColor:'#edf3d8',
    },
    {
      language: 'Core Java',
      proficiency:85,
      bgColor:'#61daf8',
    },
    {
      language: 'Javascript',
      proficiency:70,
      bgColor:'#ffabe7',
    },
    {
      language: 'Help Desk',
      proficiency:80,
      bgColor:'#2965f1',
    },
  ]
  return (
    <div className='max-w-lg'>
      
        <h4 className='bold-20 mb-4 uppercase'> LANGUAGES / FRAMEWORKS PROFICIENCY</h4>
        <div className='flexStart flex-wrap'>
          {languages.map((lang,index)=>(
            <CircularProgress
            key={index}
            Language={lang.language}
            bgColor={lang.bgColor}
            proficiency={lang.proficiency}/>
          ))}
        </div>
        
    </div>
  )
}


const CircularProgress=({Language,proficiency,bgColor})=>{
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - proficiency/100);




  return(
    <div>
      <svg className='w-24 h-24 mr-1'
      viewBox='0 0 50 50'>
        <circle
        className='circle-bg'
        cx={'25'}
        cy={'25'}
        r={radius}
        fill='none'
        stroke="#e0e0e0"
        strokeWidth={'7'}

        />
        <motion.circle
        className='circle'
        cx='25'
        cy='25'
        r={radius}
        fill='none'
        stroke={bgColor}
        strokeWidth='4'
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        initial={{strokeDashoffset: circumference}}
        animate={{strokeDashoffset:strokeDashoffset}}
        transition={{duration:1}}
        strokeLinecap='round'
        

        />
        <text
          x={'50%'}
          y={'50%'}
          textAnchor='middle'
          dominantBaseline={'middle'}
          fill='#555'
          fontSize={'6px'}
          fontWeight={'bold'}
          >
            {Language}
        </text>
      </svg>
    </div>
  )
}