interface Fruit {
    void taste();
}

class Apple implements Fruit {
    public void taste() {
        System.out.println("Apple tastes sweet");
    }
}

class Orange implements Fruit {
    public void taste() {
        System.out.println("Orange tastes tangy");
    }
}

class FruitFactory {
    public Fruit getFruit(String type) {
        if (type.equalsIgnoreCase("apple")) return new Apple();
        else if (type.equalsIgnoreCase("orange")) return new Orange();
        return null;
    }
}

public class Fruit {
    public static void main(String[] args) {
        FruitFactory factory = new FruitFactory();
        Fruit f1 = factory.getFruit("apple");
        f1.taste();
        Fruit f2 = factory.getFruit("orange");
        f2.taste();
    }
}
