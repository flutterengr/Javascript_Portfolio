module.exports = (sequelize,DataTypes)=>{
    const alias = "Actor_Movie"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        actor_id: {
            type: DataTypes.STRING
        },
        movie_id: {
            type: DataTypes.STRING
        }

    }
    const config = {
        tableName: "actor movie",
        timestamps: false
    }
    
    return sequelize.define(alias,cols,config);
     

}