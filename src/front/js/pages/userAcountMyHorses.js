import React from "react";
import NavbarVertical from "../component/navBarVertical";

export const UserAcountMyHorses = () =>{
	const colStyle={
		width: 20 + 'rem',
		height: 33 + 'rem',
		padding: 0
	}
	
    return (
		<div className="container m-0">
			<div className="row">
				<div className="col-3 border rounded border-warning p-0" style={colStyle}>
					<NavbarVertical />
				</div>
			</div>
		</div>
	);
}