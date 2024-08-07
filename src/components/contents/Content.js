import React from 'react'
import Contain1main from './content1/Contain1main'
import Content2 from './content2/Content2'
import ContentAnimate from './content1/contentAnimate/ContentAnimate'
import Content3 from './content3/Content3'
import Content4 from './content4/Content4'

export default function Content() {
    return (
        <div>
            <Contain1main/>
            <Content2/>
            <ContentAnimate/>
            <Content3/>
            <Content4/>
        </div>
    )
}
