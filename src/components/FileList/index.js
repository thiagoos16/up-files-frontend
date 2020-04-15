import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { Container, FileInfo, Preview } from './styles';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = ({ files, onDelete }) => (
    <Container>
        {files.map(uploadedFile => (
            <li key={uploadedFile.id}>
                <FileInfo>
                    <Preview src={uploadedFile.preview} />
                    <div>
                        <strong> {uploadedFile.name} </strong>
                        <span> 
                            {uploadedFile.readableSize} 
                            {!! uploadedFile.url && (
                                <button onClick={() => onDelete(uploadedFile.id)}> Excluir </button>
                            )} 
                        </span>
                    </div>
                </FileInfo>
            
                <div> 
                    {!uploadedFile.uploaded && !uploadedFile.error && (
                        <CircularProgressbar 
                            styles={{
                                root: { width: 24 },
                                path: { stroke: '#7159c1' }
                            }}
                            strokeWidth={10}
                            value={uploadedFile.progress}
                        />
                    )}

                    {uploadedFile.url && (
                        <a
                            href=""
                            tarfet="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdLink size={24}  color="#78e5d5"/>
                        </a>
                    )}

                    { uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" /> }
                    { uploadedFile.error && <MdError size={24} color="#e57878" /> }
                </div>
            </li>
        ))}        
    </Container>
);

export default FileList;