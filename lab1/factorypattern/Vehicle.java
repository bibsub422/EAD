interface Vehicle {
    void drive();
}

class Car implements Vehicle {
    public void drive() {
        System.out.println("Driving Car");
    }
}

class Bike implements Vehicle {
    public void drive() {
        System.out.println("Riding Bike");
    }
}

class VehicleFactory {
    public Vehicle getVehicle(String type) {
        if (type.equalsIgnoreCase("car")) return new Car();
        else if (type.equalsIgnoreCase("bike")) return new Bike();
        return null;
    }
}

public class Vehicle {
    public static void main(String[] args) {
        VehicleFactory factory = new VehicleFactory();
        Vehicle v1 = factory.getVehicle("car");
        v1.drive();
        Vehicle v2 = factory.getVehicle("bike");
        v2.drive();
    }
}
