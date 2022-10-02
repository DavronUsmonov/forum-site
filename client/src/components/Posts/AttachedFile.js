import React from 'react';

const AttachedFile = ({attachedFile}) => {
    const fileType = attachedFile.substring(attachedFile.indexOf('/')+1, attachedFile.indexOf(';'));
    if(fileType == 'jpeg' || fileType == 'png'){
        return (
            <img src={attachedFile}/>
        )
    }else if(attachedFile=='') {
        return (
            <div></div>
        )
    }
    else {
        return (
            <iframe src={attachedFile}></iframe>
        )
    }
}

export default AttachedFile;