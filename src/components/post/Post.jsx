import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import { uuid } from "uuidv4";
import { Daata } from "./data";
import Modal from './Modal'


export default function Post({ open, onClose }) {


  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => { setIsReadMore(!isReadMore); };
  const [isOpen, setIsOpen] = useState(false)
  const showModal = (id) =>{
    return Daata.map(item =>({
        ...item, title : item.id === id ? item.title : ""
    }))
} 

  return (
    <div>
      {Daata.map((ijustneedone) => (
        <div className="postwrapper" key={(ijustneedone.id)}  >
          <div className="post">
          ("id" === {ijustneedone.id})
          ( {ijustneedone.id} = specific)
          
          <Modal justone={ijustneedone} id={ijustneedone.id} title={ijustneedone.title} open={isOpen} >
         
             {/* {ijustneedone.id === id ? ijustneedone.id : ""},  {ijustneedone.title} */}

            </Modal> 

            <div type="button" 
            onClick={() => setIsOpen(true)}>

              <img
                className="postImg"
                src={ijustneedone.image}
                alt={ijustneedone.image} 
              />
              <div className="postInfo">
                <div className="postCats">
                  <span className="postCat">


                  </span>
                </div>
                <span className="postTitle">
                  {ijustneedone.title}

                </span>
                <hr />
                <span className="postDate">{ijustneedone.subtitle} </span>
              </div>
              <p className="postDesc">
                {((isReadMore ? ijustneedone.body.slice(0, 60) : ijustneedone.body))}
                <span onClick={toggleReadMore} className="read-or-hide">
                  {(isReadMore ? "... read more" : " show less")}
                </span>
                {}
              </p>
            </div>
          </div>
          <div>

          </div>
        </div>
      ))}
    </div>
  );
}
{/* <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={ijustneedone.image}
            alt={ijustneedone.image}
          />
          <h1 className="singlePostTitle">
            {ijustneedone.title}{console.log("www" + ijustneedone.id)
            }
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  Safak
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
            Lorrem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
        </div> */}
