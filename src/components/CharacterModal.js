import React from 'react';
import { Modal, Button, ListGroup, InputGroup, FormControl, Image, Tabs, Tab, Table } from 'react-bootstrap';


const CharacterModal=(props)=>
{

    console.log(props);
    const { comics, events, series, stories, thumbnail, urls }=props.characterDetails;
    console.log(comics)
    const comicsView=comics.items.map((item, i)=>
    {
        return(
            <tr key={i}>
                <td>{i}</td>
                <td>{item.name}</td>
            </tr>
        )
    })

    const eventsView=events.items.map((item,i)=>
    {
        return(
            <tr key={i}>
                <td>{i}</td>
                <td>{ item.name }</td>
            </tr>
        )
    })

    const seriesView=series.items.map((item, i)=>
    {
        return(
            <tr key={ i }>
                <td>{ i }</td>
                <td>{ item.name }</td>
            </tr>
        )
    })

    const storiesView=stories.items.map((item, i)=>
    {
        return(
            <tr key={i}>
                <td>{ i }</td>
                <td>{ item.name }</td>
            </tr>
        )
    })

    const urlsView=urls.map((item, i)=>
    {
        return(
        <ListGroup.Item key={i}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" className="bg-danger text-light">{ item.type }</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                value={ item.url }
                disabled
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </ListGroup.Item>
        )
    })
    return(
        <React.Fragment>
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <Image src={ thumbnail.path+"/standard_fantastic."+ thumbnail.extension} roundedCircle width={80} height={80} />
                <Modal.Title>Character Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                            {/* <Image src={props.characterDetails.thumbnail.path+"/standard_fantastic."+props.characterDetails.thumbnail.extension} roundedCircle width={30} height={30} /> */}
                                <Tabs id="controlled-tab-example">
                                    <Tab eventKey="comic" title="Comics">
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                <th>#</th>
                                                <th>Comic Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { comicsView }
                                            </tbody>
                                        </Table>
                                    </Tab>
                                    <Tab eventKey="event" title="Events">
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Event Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { eventsView }
                                            </tbody>
                                        </Table>
                                    </Tab>
                                    <Tab eventKey="series" title="Series">
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Series Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { seriesView }
                                        </tbody>
                                    </Table>
                                    </Tab>
                                    <Tab title="stories" eventKey="story">
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Story Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { storiesView }
                                            </tbody>
                                        </Table>
                                    </Tab>
                                    <Tab title="URLs" eventKey="url">
                                        <ListGroup>
                                            { urlsView }
                                        </ListGroup>
                                    </Tab>
                                </Tabs>
                            
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export {
    CharacterModal
}