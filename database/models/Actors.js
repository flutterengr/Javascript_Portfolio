module.exports = (sequelize,DataTypes)=>{
    const alias = "Actors"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER
        }

    }
    const config = {
        tableName: "actors",
        timestamps: false
    }
    
    return sequelize.define(alias,cols,config);
     

}