public class Animal {
    private static Animal instance;

    private Animal() {}

    public static Animal getInstance() {
        if (instance == null) {
            instance = new Animal();
        }
        return instance;
    }

    public void sound() {
        System.out.println("Animal makes sound");
    }

    public static void main(String[] args) {
        Animal a = Animal.getInstance();
        a.sound();
    }
}
