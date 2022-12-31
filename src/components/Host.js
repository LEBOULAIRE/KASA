import React from 'react';

const Host = ({host}) => {
    return (
            <div className="host__info">
						<p className="host__info-name">{host.name}</p>
						<img
							className="host__info-picture"
							src={host.picture}
							alt="{host.name}"
						/>
					</div>
        
    );
};

export default Host;