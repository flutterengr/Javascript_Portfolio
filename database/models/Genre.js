module.exports = (sequelize,DataTypes)=>{
    const alias = "Genre"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }
    const config = {
        tableName: "genres",
        timestamps: false
    }
    
    return sequelize.define(alias,cols,config);
     

}