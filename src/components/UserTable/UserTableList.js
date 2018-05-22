import React from 'react';
import './UserTable';
import UserTable from './UserTable';

const UserTableList = ({ config, standing }) => {
    console.log('config', config);
    console.log('standing', standing);

    const table = [{ team: config.team.teams[0], points: -1, color: config.team.legend }];

    console.log('table', table);
    return <UserTable user={config.user.users[0]} position={5} points={81} table={table} />;
};

export default UserTableList;
