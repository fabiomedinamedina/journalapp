export const noteDemo = {
  id: '123213',
  title: 'Titulo',
  body: 'Descripción de la nota',
  date: 123123123,
  imageUrls: []
}

export const noteDemo2 = {
  id: '64432',
  title: 'Titulo nota 2',
  body: 'Descripción de la nota 2',
  date: 435435,
  imageUrls: [
    {id: '12', url: 'https://imagenNota1.jpg'},
    {id: '21', url: 'https://imagenNota2.jpg'},
  ]
}

export const noteDemoActive = {
  id: '2N9NLwCZTv7Ol1RyABsH',
  title: 'Titulo nota actualizado',
  body: 'Descripción de la nota 2',
  date: 435435,
  imageUrls: [
    {id: '12', url: 'https://imagenNota1.jpg'},
    {id: '21', url: 'https://imagenNota2.jpg'},
  ],
  deleteImages: []
}

export const noteDemoEmpty = {
  id: '',
  title: '',
  body: '',
  date: 12123,
  imageUrls: []
}

export const initialState = {
  isSaving: false,
  messageAction: null,
  notes: [],
  activeNote: null,
}

export const initialStateSaving = {
  isSaving: true,
  messageAction: null,
  notes: [],
  activeNote: noteDemo,
}

export const initialStateWithNotes = {
  isSaving: true,
  messageAction: '',
  notes: [ noteDemo, noteDemo2 ],
  activeNote: noteDemoActive,
}

export const initialStateWithoutActiveNotes = {
  isSaving: true,
  messageAction: '',
  notes: [ noteDemo, noteDemo2 ],
  activeNote: null,
}

export const notesGetFirebase = [
  {
    id: '1234o9',
    data: () => ({
      title: 'Titulo 1',
      body: 'Descripción de la nota 1',
      date: 74454,
      imageUrls: [],
    })
  },
  {
    id: '222',
    data: () => ({
      title: 'Titulo 2',
      body: 'Descripción de la nota 2',
      date: 123123123,
      imageUrls: [],
    })
  }
]