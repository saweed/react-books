import React, { Component } from 'react'

export default class Book extends Component {
    handleUpVote = () => (
        this.props.onUpVote(this.props.id)
    )
    handleDownVote = () => (
        this.props.onDownVote(this.props.id)
    )
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.imageLink} alt="" title="" />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        {this.props.upVotes}
                        <a onClick={this.handleUpVote}>
                        <i className='large caret up icon' />
                        </a>
                        {this.props.downVotes}
                        <a onClick={this.handleDownVote}>
                        <i className='large caret down icon' />
                        </a>
                    </div>
                    <div className='description'>
                        <a href={this.props.link} >{this.props.title}</a>
                        <p>by: {this.props.author}</p>
                        <p>in: {this.props.language}</p>
                        <p>pages: {this.props.pages}</p>
                        <p>country: {this.props.country}</p>
                        <p>year: {this.props.year}</p>
                    </div>
                </div>
            </div>
        )
    }
}