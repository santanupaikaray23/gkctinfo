import React, {Component} from 'react';
import './AboutOurStory.css';

class AboutOurStory extends Component{
    render(){
       return(
             <div className='aboutourstory' id='aboutourstory'>
                <div className='left'>
                <div className='wrapper2'>
                <p3>WHAT WE DO</p3>
               <h2>Fresh Ideas for Every Business</h2>
                <div className='AboutOurStoryContainer'>
                   
                    </div>
                    </div>
                <div className='right'>
                <div className='wrapper1'>
                <br/>
                <div className='skill-box'>
                    <div className='title'>Creative Approach</div>
                    <div className='skill-bar'>
                        <span className='skill-per html'>
                            <span className='tooltiptext'>76%</span>
                        </span>
                    </div>
                    </div>
                    <p4>Creative approaches are concerned with a holistic approach to education,
                             focusing upon the learner becoming part of a professional community,
                             involving the dimensions of knowledge, performance and identity formation.

                        </p4>
                    <br/>
                    
                    <div className='skill-box'>
                    <div className='title'>Guaranteed Success</div>
                    <div className='skill-bar'>
                        <span className='skill-per app'>
                            <span className='tooltiptext'>89%</span>
                        </span>
                       
                    </div>
                    </div>
                    <p4>We are providing guaranteed success with 100% client satisfactory.</p4>
                    <div className='skill-box'>
                    <div className='title'>SEO Optimization</div>
                    <div className='skill-bar'>
                        <span className='skill-per internship'>
                            <span className='tooltiptext'>75%</span>
                        </span>
                        <br/>
                        <p4>Search engine optimization is a set of technical and content practices 
                            aimed at aligning a website page with a
                             search engine’s ranking algorithm so it can be easily found, crawled, indexed.</p4>
                            
                    </div>
                    </div>
                    </div>
               </div>
            
        </div>
 </div>
        
    
            )
        }
    }

export default AboutOurStory;