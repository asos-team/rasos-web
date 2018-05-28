import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Dropzone from 'react-dropzone'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            accept: '',
            files: [],
            dropzoneActive: false
        }
    }

    onDragEnter() {
        this.setState({
            dropzoneActive: true
        });
    }

    onDragLeave() {
        this.setState({
            dropzoneActive: false
        });
    }

    onDrop(files) {
        this.setState({
            files,
            dropzoneActive: false
        });
    }

    render() {
        const { files, dropzoneActive } = this.state;
        const overlayStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: '2.5em 0',
            background: 'rgba(0,0,0,0.5)',
            textAlign: 'center',
            color: '#fff'
        };
        return (
            <Dropzone
                style={{position: "relative"}}
                multiple={false}
                onDrop={this.onDrop.bind(this)}
                onDragEnter={this.onDragEnter.bind(this)}
                onDragLeave={this.onDragLeave.bind(this)}
            >
                { dropzoneActive && <div style={overlayStyle}>Drop files...</div> }
                <div>
                    <h1>Rasos Training Uploader</h1>
                    <h2>Player:</h2>
                    <ul>
                        {
                            files.map(f => <li>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>

                </div>
            </Dropzone>
        );
    }
}

<App />

export default App;
