import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./singlePost.css";
import { Daata } from "../post/data";

export default function SinglePost() {
  const Single = () => {
    const [list, setList] = React.useState(Daata);

    function handleShow(id) {
      const newList = list.filter((ijustneedone) => ijustneedone.id !== id);

      setList(newList);
      console.log("newList" + newList)
    }
  }
  return (
    <div className="singlePost">
      {Daata.map((ijustneedone) => (
        <div className="singlePostWrapper">
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
        </div>))} );
    </div>
  );
}
