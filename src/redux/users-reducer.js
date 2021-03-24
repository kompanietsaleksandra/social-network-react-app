const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState =      {
    users:  [
        // {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltvBEVwZUC1nI-q-4QnueJjvDFPOrHqBWig&usqp=CAU', followed: false, fullName: 'Kira', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoQXpGUFg25anIGb0Qa4HVAzqGaXQEVwgZw&usqp=CAU', followed: false, fullName: 'Vadim', status: 'I am a boss', location: {city: 'Kanberra', country: 'Australia'}},
        // {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU', followed: true, fullName: 'Kirill', status: 'I am a boss', location: {city: 'Kair', country: 'Egypt'}},
        // {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBGjSeYimOBFkTRv3VK3T8aZZ8a1GWsSFzA&usqp=CAU', followed: true, fullName: 'Anna', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
    ],
    pageSize: 5,
    totalUserCount: 21,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
                })
            };
        case  UNFOLLOW:
            return  {...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export default usersReducer;