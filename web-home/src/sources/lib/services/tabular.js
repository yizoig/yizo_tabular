
import { Api } from '../api'
import api from '../../config/api'
export default {
    add: Api.post('/tabular/add'),
    list:Api.get('/tabular'),
    update:Api.put('/tabular/:id'),
    delete:Api.delete('/tabular'),
    info:Api.get("/tabular/:id"),
    sortField:Api.put("/tabular/:id/field/sort"),
    deleteField:Api.delete("/tabular/:id/field"),
    addField:Api.post('/tabular/:id/field'),
    updateField:Api.put('/tabular/:tid/field/:fid'),
}