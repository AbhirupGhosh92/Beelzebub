import React, { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import "./editor.css"
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import dynamic from 'next/dynamic';

export default function ScribeEditor() {
  const [editorValue, setEditorValue] = useState('');
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

  return (
    <div>
    <ReactQuill
        className='bg-white text-black'
      value={editorValue}
      onChange={(value) => setEditorValue(value)}
      modules={{
        toolbar: [
          ["bold","italic","underline","strike"],
  [{ 'header': 1 }, { 'header': 2 }],  
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],             // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],       
  ['blockquote', 'code-block'],
  ['link', 'image', 'video'],                  // text direction

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],                                      // remove formatting button

        ]
      }}
      theme="snow"
    />
    <button onClick={() => {
      alert(editorValue)
    }}>show </button>
    </div>

  );
}