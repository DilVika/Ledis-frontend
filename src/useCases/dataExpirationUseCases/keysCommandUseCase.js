import repository from "../../repositories/repository";

// Use case that list all available keys.
const keysCommandUseCase = () => {
    return {
        errorMessage: null,
        data: Array.from(repository.keys()),
    };
}

export default keysCommandUseCase;
