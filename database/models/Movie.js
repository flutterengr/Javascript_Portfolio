module.exports = (sequelize,DataTypes)=>{
    const alias = "Movie"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards: {
            type: DataTypes.INTEGER
        },
        length: {
            type:DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "movies",
        timestamps: false
    }
    
    
    return sequelize.define(alias,cols,config);
     

}