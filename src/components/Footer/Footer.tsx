import React from 'react'
import './Footer.css';
import Logo from '../Logo/Logo';
import Tag from '../Tag/Tag';

interface FooterProps {
    onTagClick: (tag:string) => void
}


export const Footer = ({onTagClick}:FooterProps) => {
  
    return (
        <footer className="footer">
            <div className='footer__container'>
                    <Logo />
                    <div className="footer__content">                
                        <div className="footer__popularSearchLabel">Popular Searches </div>
                        <div className="footer__popularSearch">
                            {["Dog", "Office", "Digital", "Cat", "Coffee", "Meeting", "Space", "World", "Cars", "Nature", "Wildlife", "Games", "Business", "Beach trip", "Holiday"].map((item, index) =>
                                <Tag  key={item} label={item} onClick={() => onTagClick(item)}/>
                            )}
                        </div>
                
            </div>
            </div>
            
        </footer>
    );
}
