class HelloWorld {
    private readonly msg: string;
    constructor(msg: string) {
        this.msg = msg
    }

    getMsg(): string {
        return 'MSG:' + this.msg
    }
}

export {HelloWorld}
