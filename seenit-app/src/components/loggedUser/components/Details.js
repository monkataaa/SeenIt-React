import React, { Component } from 'react'
import reqHandler from './../../utils/reqHandler'
import { Link } from 'react-router-dom'
import convertTime from './../../utils/dateTimeConverter'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: {}
        };

    }
    componentDidMount() {
        reqHandler.detailedPost(this.props.match.params.id)
            .then(detailedPost => {
                this.setState({ postData: detailedPost })
            })

    }

    render() {
        if (this.state.postData._kmd) {
         return      <section id="viewComments">
               <div class="post">
                   <div class="col thumbnail">
                       <a href={this.state.postData.url} >
                           <img src={this.state.postData.imageUrl} />
                       </a>
                   </div>
                   <div class="post-content">
                       <div class="title">
                           <a href={this.state.postData.url} >
                               {this.state.postData.title}
                           </a>
                       </div>
                       <div class="details">
                           <p>{this.state.postData.description}</p>
                           <div class="info">
                               submitted {convertTime(this.state.postData._kmd.lmt)} days ago by {this.state.postData.author}
                           </div>
                           <div class="controls">
                               <ul>
                                   <li class="action"><a class="editLink" href="#">edit</a></li>
                                   <li class="action"><a class="deleteLink" href="#">delete</a></li>
                               </ul>
                           </div>

                       </div>
                   </div>
                   <div class="clear"></div>
               </div>
               <div class="post post-content">
                   <form id="commentForm">
                       <label>Comment</label>
                       <textarea name="content" type="text"></textarea>
                       <input type="submit" value="Add Comment" id="btnPostComment" />
                   </form>
               </div>
               <article class="post post-content">
                   <p>Thanks, just what I needed.</p>
                   <div class="info">
                       submitted 5 days ago by Gosho | <a href="#" class="deleteLink">delete</a>
                   </div>
               </article>
               <article class="post post-content">
                   <p>Tutorial is kinda outdated, but it works.</p>
                   <div class="info">
                       submitted 4 days ago by Kiril | <a href="#" class="deleteLink">delete</a>
                   </div>
               </article>
               <article class="post post-content">
                   <p>Beats React any day! So must easier and less boilerplate.</p>
                   <div class="info">
                       submitted 3 days ago by Nakov | <a href="#" class="deleteLink">delete</a>
                   </div>
               </article>
           </section>
        }

        return (
                <div>Loading...</div>
        )
    }
}