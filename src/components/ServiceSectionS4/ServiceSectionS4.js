import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import Services2 from '../../api/service2'
import blogs from '../../api/blogs'

import SectionTitle from '../SectionTitle/SectionTitle';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS4 = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (<>
   
    <section className="wpo-blog-section section-padding1" id="blog">
        <div className="container">
            {/* <SectionTitle subTitle={'Our Blog'} Title={'Latest News & Press'} /> */}
            <div className="wpo-blog-items">
                <div className="row">
                {Services2.slice(2, 8).map((service, srv) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={srv}>
                            <div className="wpo-blog-item">
                                <div className="wpo-blog-img">
                                    <img src={service.screens} alt="" />
                                </div>
                                <div className="wpo-blog-content">
                                   
                                <h2><Link onClick={ClickHandler} to={`/blog-single/${service.slug}`}>{service.title.slice(0, 30)}...</Link></h2>
                                <p>{service.description.slice(0, 150)} </p><span><Link className='more' onClick={ClickHandler} to={`/blog-single/${service.slug}`}>Read more...</Link></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section></>
        
        
    );
}

export default ServiceSectionS4;