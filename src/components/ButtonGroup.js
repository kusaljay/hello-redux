import React from 'react';
import { store } from '../store';
import { setTechnology } from '../actions';

const buttonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button data-tech={tech} key={`btn-${i}`} onClick={dispatchBtnAction} className="hello-btn">
        {tech}
      </button>
    ))}
  </div>
)

function dispatchBtnAction (e) {
  const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(tech));
}

export default buttonGroup;