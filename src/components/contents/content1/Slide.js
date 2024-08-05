import React from 'react'
import { Button, UncontrolledCarousel } from 'reactstrap'

export default function Slide() {
    return (
        <div className='contain-1' style={{ marginTop: '20px' }}>
            <Button className='btn-disco d-md-none d-lg-block d-none d-sm-block d-sm-none d-md-block'>DISCOVER NOW</Button>
            <UncontrolledCarousel
                items={[
                    {
                        altText: '',
                        caption: '',
                        key: 1,
                        src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                        altText: '',
                        caption: '',
                        key: 2,
                        src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                        altText: '',
                        caption: '',
                        key: 3,
                        src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}
            />
        </div>
    )
}
