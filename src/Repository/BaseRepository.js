"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor() {
        this.data = [];
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.find(item => item.id === id);
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data.push(item);
            return item;
        });
    }
    update(id, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.data.findIndex(item => item.id === id);
            if (index === -1)
                return undefined;
            const updatedItem = Object.assign(Object.assign({}, this.data[index]), updates);
            this.data[index] = updatedItem;
            return updatedItem;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.data.findIndex(item => item.id === id);
            if (index === -1)
                return false;
            this.data.splice(index, 1);
            return true;
        });
    }
    findByFilter(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.filter(item => Object.keys(filter).every(key => item[key] === filter[key]));
        });
    }
}
exports.BaseRepository = BaseRepository;
