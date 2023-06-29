# @lpc/api Architecture

## Overview

### gql method

- query
- mutation
- subscription
    - push
    - fetch

### layers

- adopters 層
    - graphql-adopters
        - query
        - mutation
        - subscription
- usecases 層
    - queries
        - params
        - results
        - query
    - commands
        - params
        - results
        - command
- domains 層
    - queries
        - dto
        - query-interfaces
    - commands
        - collections
        - entities
        - value-objects
        - repository-interfaces
- infrastructures 層
    - query-services
    - repositories

### ex-layers

- gql
- di
- db
- libs
    - drizzle
    - graphql-yoga
    - pothos
    - inversify

## directory-structure

- src/
    - packages/
        - [package-name]/
            - adopters/
                - graphql-adopters/
                    - queries/
                        - [module-name]/
                            - [query-name]/
                                - index.ts
                                - [query-name].query-adopter.ts
                                - [query-name].query-adopter.spec.ts
                    - mutations/
                        - [module-name]/
                            - [mutation-name]/
                                - index.ts
                                - [mutation-name].mutation-adopter.ts
                                - [mutation-name].mutation-adopter.spec.ts
                    - subscriptions/
                        - [module-name]/
                            - [subscription-name]/
                                - index.ts
                                - [subscription-name].subscription-adopter.ts
                                - [subscription-name].subscription-adopter.spec.ts
                    - dataloaders/
                        - [module-name]/
                            - [dataloader-name]/
                                - index.ts
                                - [dataloader-name].dataloader-adopter.ts
                                - [dataloader-name].dataloader-adopter.spec.ts
            - usecases/
                - queries/
                    - [module-name]/
                        - [app-query-name]/
                            - index.ts
                            - app-query.ts
                            - app-query.spec.ts
                            - input.ts
                            - input.spec.ts
                            - result.ts
                            - result.spec.ts
                - commands/
                    - [module-name]/
                        - [command-name]/
                            - index.ts
                            - command.ts
                            - command.spec.ts
                            - input.ts
                            - input.spec.ts
                            - result.ts
                            - result.spec.ts
            - domains/
                - queries/
                    - [module-name]/
                        - dto/
                            - ... モジュール内で共通利用する dto
                            - [obj-name].dto.ts
                        - [query-name]/
                            - [query-name].dto.ts
                            - [query-name].query-service.interface.ts
                - commands/
                    - [module-name]/
                        - [domain-collection-name]/
                            - [domain-collection-name].collection.ts
                            - [domain-collection-name].collection.spec.ts
                            - [domain-collection-name].repository.interface.ts
                            - entities/
                                - [entity-name]/
                                    - index.ts
                                    - [entity-name].entity.ts
                                    - [entity-name].entity.spec.ts
                            - value-objects/
                                - [value-object-name]/
                                    - index.ts
                                    - [value-object-name].value-object.ts
                                    - [value-object-name].value-object.spec.ts
            - infrastructures/
                - queries/
                    - [module-name]/
                        - [query-name]/
                            - index.ts
                            - [query-name].query-service.ts
                            - [query-name].query-service.spec.ts
                - repositories/
                    - [module-name]/
                        - [domain-collection-name]/
                            - index.ts
                            - [domain-collection-name].repository.ts
                            - [domain-collection-name].repository.spec.ts
    - gql/
    - di/
    - db/
    - libs/
    - tests/
        - graphql-tests/
