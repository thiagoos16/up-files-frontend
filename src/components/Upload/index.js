import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  render() {
    return (
        <Dropzone accept="image/*" onDropAccepted={() => {}}>
            {/* usa um um partner do react remder props, que é uma forma de passar o children com um função em vez de usar um <Element/> */}
            { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                    { ... getRootProps() }
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input { ... getInputProps()} />
                    Arraste seu arquivo até aqui
                </DropContainer>
            )}
        </Dropzone>
    );
  }
}
