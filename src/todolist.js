import React from 'react';
import {Todo} from './todo';

export const TodoList = (props) => <ul>
<li><Todo completed={false} text="Todo 1"/></li>
<li><Todo completed={false} text="Todo 2"/></li>
</ul>;