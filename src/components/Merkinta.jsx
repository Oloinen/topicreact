import React, { useState } from 'react';

export default function merkinta(props) {

    const {title, description} = props.merkki

    return (
        <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td><input type="button" value="Delete" /></td>
        <td><input type="button" value="ShowOne" /></td>
    </tr>
    )
}