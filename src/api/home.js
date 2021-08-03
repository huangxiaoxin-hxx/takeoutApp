import {$http} from '../boot/http.js'

export const getPlaceholder = () => $http.get('/api/placeholder');