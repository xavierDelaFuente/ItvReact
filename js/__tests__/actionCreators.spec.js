// @flow
import moxios from 'moxios';
import { setSearchTerm, addAPIData, getAPIDetails } from '../actionCreators';


const Atlanta = {
  "title": "Atlanta",
  "year": "2008–2013",
  "description": "Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \"Earnest 'Earn' Marks,\" an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.",
  "poster": "a.jpg",
  "imdbID": "tt4288182",
  "trailer": "MpEdJ-mmTlY",
  "rating": "8.1"
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
  // We use .toMatchSnapshot(); snapshots instead of checking by hand
  // expect(setSearchTerm('New York')).toEqual({type: 'SET_SEARCH_TERM', payload: 'New York'});
})

test('addAPIData', () => {	
  expect(addAPIData(Atlanta)).toMatchSnapshot();
})

test('getAPIDetails', () => {
	const dispatchMock = jest.fn(); //spy function
	moxios.withMock(() => {
		const thunk = getAPIDetails(Atlanta.imdbID)(dispatchMock);
		// thunk(dispatchMock);
		moxios.wait(() => {
			const request = moxios.request.mostRecent();
			request.respondWith({
				status:200,
				response: Atlanta
			})
			.then(() => {
				expect(request.url).toEqual(`http://localhost:3000/${Atlanta.imdbID}`);
				expect(dispatchMock).toBeCalled(addAPIData(Atlanta));
				done();
			});
		});
	});
});