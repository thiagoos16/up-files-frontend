import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { Container, FileInfo, Preview } from './styles';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src=""/>
                <div>
                    <strong> profil.png </strong>
                    <span>64kb <button onClick={() => {}}> Excluir </button> </span>
                </div>
            </FileInfo>
        
            <div> 
                <CircularProgressbar 
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '#7159c1' }
                    }}
                    strokeWidth={10}
                    percentage={60}
                />

                <a
                    href=""
                    tarfet="_blank"
                    rel="noopener noreferrer"
                >
                    <MdLink size={24}  color="#78e5d5"/>
                </a>

                <MdCheckCircle size={24} color="#78e5d5" />
                <MdError size={24} color="#e57878" />
            </div>
        </li>
    </Container>
);

export default FileList;