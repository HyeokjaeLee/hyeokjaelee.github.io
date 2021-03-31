import React from 'react';
import { Label,CustomInput } from 'reactstrap';

/*
        <Label for="exampleSearch">Search</Label>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search placeholder"
        />
 */
export const Footer = (props) => {
    return(
        <div className="footer">
            <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled />
        </div>
    )
}