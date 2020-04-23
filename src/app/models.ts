export interface Id {
    $oid: string;
}

export interface Activity {
    _id: Id;
    user: string;
    activity: string;
    startTime: any;
    endTime: any;
    filePath: string;
    readableDate: string;
    readableDuration: string;
}