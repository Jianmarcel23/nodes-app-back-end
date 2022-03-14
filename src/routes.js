const routes = [
        {
          method: 'POST',
          path: '/notes',
          handler: addNoteHandler,
        },
        {
          method: 'POST',
          path: '/notes/{id}',
          handler: () => {},
        },

        {
          method: 'GET',
          path: '/notes',
          handler: getAllNotesHandler,
        },
        {
          method: 'GET',
          path: '/notes/{id}',
          handler: () => {},
        },
        {
            method: 'GET',
            path: '/notes/{id}',
            handler: getNoteByIdHandler,
          },
          {
            method: 'PUT',
            path: '/notes/{id}',
            handler: () => {},
          },
          {
            method: 'PUT',
            path: '/notes/{id}',
            handler: editNoteByIdHandler,
          },
          {
            method: 'DELETE',
            path: '/notes/{id}',
            handler: () => {},
          },
          {
            method: 'DELETE',
            path: '/notes/{id}',
            handler: deleteNoteByIdHandler,
         },
      ];
      const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');
   
  module.exports = { addNoteHandler, getAllNotesHandler };