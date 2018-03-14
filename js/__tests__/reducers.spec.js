import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  let state;
  state = reducers(
  	{ searchTerm: '', apiData: {} }, 
  	{ type: 'SET_SEARCH_TERM', payload: 'black' }
  );
  expect(state).toEqual(
  	{ searchTerm: 'black', apiData: {} }
  );
});

test('ADD_API_DATA', () => {
  let state;
  state = reducers(
  	{ searchTerm: '', apiData: {} }, 
  	{ 
  		type: 'ADD_API_DATA', 
  		payload: { 
  			rating: '6.8', 
  			title: 'Game of Thrones', 
  			year: '2011–', 
  			description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.', 
  			poster: 'got.jpg', 
  			imdbID: 'tt0944947', 
  			trailer: 'giYeaKsXnsI' 
  		} 
  	});
  expect(state).toEqual(
  	{ searchTerm: '', 
  	apiData: { 
  		tt0944947: { 
  			rating: '6.8', 
  			title: 'Game of Thrones', 
  			year: '2011–', 
  			description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.', 
  			poster: 'got.jpg', 
  			imdbID: 'tt0944947', 
  			trailer: 'giYeaKsXnsI' 
  		} 
  	} 
  });
});
