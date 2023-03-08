import React from 'react'
import { List , Datagrid , TextField , DateField ,DeleteButton , EditButton } from 'react-admin'


function PostList({props}) {
  return (
    <List {...props} title="Posts">
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="createdAt" />
        <EditButton basePath="posts" />
        <DeleteButton bassePath="posts" />
      </Datagrid>
    </List>
  )
}

export default PostList